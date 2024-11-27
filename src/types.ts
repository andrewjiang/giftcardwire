export type CardBackground = {
  type: 'gradient';
} | {
  type: 'image';
  url: string;
};

export interface GiftCardData {
  amount: string;
  background: CardBackground;
  senderName: string;
  recipientEmail: string;
  message: string;
}