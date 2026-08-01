/**
 * 求人応募窓口（差し替え用の単一情報源）
 * Recruitment contact channels (single source of truth for later swaps)
 * Saluran kontak lowongan (sumber tunggal untuk penggantian nanti)
 *
 * WhatsApp / LINE 開設後は下記の url を更新するだけで /kerja に反映される。
 * After opening WhatsApp / LINE, update the urls below; /kerja picks them up.
 * Setelah WhatsApp / LINE dibuka, cukup perbarui url di bawah; /kerja ikut berubah.
 */
export type RecruitmentChannel = {
  id: "email" | "phone" | "whatsapp" | "line";
  labelJa: string;
  labelId: string;
  /** 表示用テキスト / Display text / Teks tampilan */
  display: string;
  /** リンク先。未開設の場合は null / Link target; null if not yet opened / Target tautan; null jika belum dibuka */
  href: string | null;
  /** true のとき「まもなく開設」表示 / Show "coming soon" when true / Tampilkan "segera dibuka" jika true */
  comingSoon: boolean;
};

export const recruitmentChannels: readonly RecruitmentChannel[] = [
  {
    id: "email",
    labelJa: "メール",
    labelId: "Email",
    display: "info@sugu-kuru.co.jp",
    href: "mailto:info@sugu-kuru.co.jp",
    comingSoon: false,
  },
  {
    id: "phone",
    labelJa: "電話",
    labelId: "Telepon",
    display: "0995-73-9939",
    href: "tel:+81995739939",
    comingSoon: false,
  },
  {
    id: "whatsapp",
    labelJa: "WhatsApp",
    labelId: "WhatsApp",
    display: "Coming soon",
    href: null,
    comingSoon: true,
  },
  {
    id: "line",
    labelJa: "LINE",
    labelId: "LINE",
    display: "Coming soon",
    href: null,
    comingSoon: true,
  },
] as const;
