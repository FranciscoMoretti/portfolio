// Window with gtag property for Google Analytics
interface Window {
  gtag: (...args: any[]) => void
  dataLayer: Record<string, any>
}