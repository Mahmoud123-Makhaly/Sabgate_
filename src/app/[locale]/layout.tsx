import React, { ReactNode } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Almarai } from 'next/font/google';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';

import { Actions } from '@libs/actions';

import '../../styles/theme.scss';
import AuthProvider from '../../AuthProvider';
import ToastProvider from './ToastProvider';

const almarai = Almarai({
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic'],
});

type Props = {
  children: ReactNode;
  params: { locale: string; path?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  const _defaultMetaData = await Actions.app.defaultLayoutMetaData();
  return _defaultMetaData ?? notFound();
}
export default async function RootLayout(props: Props) {
  const { params, children } = props;

  let messages;
  try {
    messages = (await import(`../../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={params.locale}
      dir={params.locale === 'en' ? 'ltr' : 'rtl'}
      data-layout-dir={params.locale === 'en' ? 'ltr' : 'rtl'}
      data-preloader="disable"
    >
      <body className={almarai.className} dir={params.locale === 'en' ? 'ltr' : 'rtl'}>
        <NextIntlClientProvider messages={messages} locale={params.locale}>
          <ToastProvider />
          <AuthProvider>{children}</AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
