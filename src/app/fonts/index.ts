import local from 'next/font/local'

export const bergmans = local({
  src: [
    {
      path: './F37Bergman-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './F37Bergman-BoldIt.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: './F37Bergman-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './F37Bergman-LightIt.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: './F37Bergman-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './F37Bergman-RegularIt.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './F37Bergman-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: './F37Bergman-ThinIt.woff',
      weight: '100',
      style: 'italic',
    },
  ],
  variable: '--font-bergman',
})

export const acidGroteskFonts = local({
  src: [
    {
      path: './acid-grotesk-extralight.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './acid-grotesk-light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './acid-grotesk-normal.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './acid-grotesk-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './acid-grotesk-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './acid-grotesk-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-acid-grotesk',
})

export const testTiemposFonts = local({
  src: [
    {
      path: './test-tiempos-fine-light.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './test-tiempos-fine-light-italic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: './test-tiempos-fine-medium.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './test-tiempos-fine-medium-italic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: './test-tiempos-fine-regular.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './test-tiempos-fine-regular-italic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './test-tiempos-fine-semibold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './test-tiempos-fine-semibold-italic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './test-tiempos-fine-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './test-tiempos-fine-bold-italic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './test-tiempos-fine-black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './test-tiempos-fine-black-italic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-test-tiempos',
})
