import { whatsappLink } from "@/content/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Olive Oak Interior Decor on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-3 rounded-full bg-olive-deep px-4 py-3 text-ivory shadow-[0_10px_30px_-12px_oklch(0.22_0.008_60/0.55)] transition-transform duration-300 hover:scale-[1.03] sm:right-6 sm:bottom-6"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-5 fill-current"
        focusable="false"
      >
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.78.96-.96 1.16-.17.2-.35.22-.65.07-.3-.15-1.12-.41-2.13-1.31-.79-.7-1.32-1.57-1.47-1.87-.15-.3-.02-.47.13-.62.15-.15.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.5.07-.77.37-.27.3-1.02.99-1.02 2.41 0 1.42 1.04 2.8 1.19 2.99.15.2 2.05 3.26 5.02 4.44 2.97 1.18 2.97.79 3.5.74.54-.05 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 22h-.01a9.9 9.9 0 0 1-5.03-1.38l-3.52.92.94-3.44A9.87 9.87 0 0 1 2.15 12.1C2.13 6.63 6.58 2.17 12.05 2.17A9.86 9.86 0 0 1 22 12.05C22 17.52 17.52 22 12.05 22z" />
      </svg>
      <span className="rule-label hidden sm:inline">WhatsApp</span>
    </a>
  );
}