import React from "react";
import { useAccount, useSetAddress, useSetAddressError } from "./account";

export const useWallet = () => {
  const setAddress = useSetAddress();
  const setError = useSetAddressError();
  const { address, errorMessage } = useAccount();

  const [isMetaMaskConnected, setIsMetaMaskConnected] = React.useState(false);

  const handleConnect = React.useCallback(async () => {
    try {
      if (!window.ethereum || !window.ethereum.isMetaMask) {
        setError("Metamaskをインストールしてください");
        setIsMetaMaskConnected(false);
        return;
      }

      if (window.ethereum.chainId !== "0x1") {
        setError(
          "イーサリアムメインネットでのみ利用できます。ネットワークを切り替えてください。"
        );
        setIsMetaMaskConnected(false);
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length !== 0) {
        setAddress(accounts[0]);
        setIsMetaMaskConnected(true);
      } else {
        setError("認証済みのアカウントが見つかりませんでした");
        setIsMetaMaskConnected(false);
      }
    } catch (error) {
      setError("Metamaskの接続に失敗しました");
      setIsMetaMaskConnected(false);
    }
  }, [setAddress, setError]);

  return { handleConnect, address, error: errorMessage, isMetaMaskConnected };
};
