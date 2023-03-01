import { MainWrapper, Banner, Content } from './Main.styled';

export default function Main() {
  return (
    <MainWrapper>
      <Banner>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3041151172603973"
          crossOrigin="anonymous"
        ></script>

        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3041151172603973"
          data-ad-slot="8676081656"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </Banner>
      <Content>
        <h1>APP</h1>
      </Content>
      <Banner />
    </MainWrapper>
  );
}
