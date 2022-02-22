export function formatAddress(address) {
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;
}

export const padWidth = "1024px";
