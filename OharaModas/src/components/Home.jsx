// Home.jsx
import React, { useState, useEffect } from 'react';
import './home.css';

function Home() {
  const imagensBanner = [
    "https://150771701.v2.pressablecdn.com/wp-content/uploads/2024/10/interior-clothing-store-with-stylish-merchandise-racks-fashionable-brand-design-casual-wear-modern-boutique-empty-fashion-showroom-shopping-centre-with-elegant-merchandise-scaled.jpg",
    "https://blog.suaquadra.com.br/wp-content/uploads/2024/07/loja-roupa-imovel-comercial-sp-1024x683.jpg",
    "https://listenx.com.br/blog/wp-content/uploads/2022/02/textos-comerciais-para-lojas-de-roupas.jpg",
    "https://www.mcamposarquitetura.com/wp-content/uploads/2017/07/Design-de-interiores-projeto-comercial-loja-roupas-e-acess%C3%B3rios-Projeto-e-Maquete-eletronica-3D-Belo-Horizonte-BH-Miri%C3%A3-Campos-MCampos-arquitetura-1.jpg"
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaImagem = () => {
    setIndiceAtual((prev) => (prev + 1) % imagensBanner.length);
  };

  const imagemAnterior = () => {
    setIndiceAtual((prev) => (prev - 1 + imagensBanner.length) % imagensBanner.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      <header className="header">
        <h1>OharaModas</h1>
        <p>Descubra a moda mais estilosa para você!</p>
      </header>

      <section className="banner-container">
        <button className="banner-button prev" onClick={imagemAnterior} aria-label="Imagem anterior">⟨</button>
        <div
          className="banner"
          style={{ transform: `translateX(-${indiceAtual * 100}%)` }}
        >
          {imagensBanner.map((src, index) => (
            <img key={index} src={src} alt={`Roupa ${index + 1}`} />
          ))}
        </div>
        <button className="banner-button next" onClick={proximaImagem} aria-label="Próxima imagem">⟩</button>
      </section>

      <section className="sobre">
        <h2>Bem-vindo à OharaModas</h2>
        <p>
          Na nossa loja, você encontra as últimas tendências da moda com qualidade e estilo.
          Trabalhamos com dedicação para oferecer roupas modernas, confortáveis e acessíveis
          para todos os estilos. Venha viver a experiência OharaModas!
        </p>
      </section>

      <section className="produtos">
        <h2>Ofertas Especiais</h2>
        <div className="galeria">
          <div className="produto">
            <img src="https://divamoderna.com.br/cdn/shop/files/SHEIN_VCAY_Vestido_Estampado_com_Flores_Sem_Costas_para_Frias_e_Lazer__SHEIN_Brasil_main_5_1340x.jpg?v=1730232001" alt="Vestido Floral" />
            <p>Vestido Floral - R$ 129,90</p>
          </div>
          <div className="produto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0z7JSph8Xylr31u2IoRN4-sonOX0ErB7e47Jcl8Qcp_c1AwyVuqkEtCnY1Cug8orG3z8&usqp=CAU" alt="Camisa Casual" />
            <p>Camisa Casual - R$ 89,90</p>
          </div>
          <div className="produto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDm3xjEXuW8zHZ3cE2pSK9txQfPf9FKQmudY70afu57vBV671qcJFGaWLhWpiwmR2BIqc&usqp=CAU" alt="Calça Jeans" />
            <p>Calça Jeans - R$ 149,90</p>
          </div>
          <div className="produto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSKqsiErzckqBoWG0OKc1qFIrXXlt6osf9P7ltNbhKKB_UoBwtdYNS3RSAWh7y_NAsmE&usqp=CAU" alt="Blusa Estilosa" />
            <p>Blusa Estilosa - R$ 89,90</p>
          </div>
          <div className="produto">
            <img src="https://alohacamilly.com.br/wp-content/uploads/2025/04/photo_2025-04-07-12.34.12.jpeg" alt="Jaqueta Casual" />
            <p>Jaqueta Casual - R$ 89,90</p>
          </div>
          <div className="produto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlaaMH-WqW4PAZmR0BBLDrhsz8p2wmax39iorMVbR3-XVeaUT2ElEtGv60AEW1RaQvTA&usqp=CAU" alt="Camisa Estilosa" />
            <p>Camisa Estilosa - R$ 89,90</p>
          </div>
          <div className="produto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdGQsEEhBwqTap1v5UMlW83kjCsNLCUPHE9tPwtZpLbh81tajDvAGlgzn1yX0IgllSfU&usqp=CAU" alt="Calça Jeans" />
            <p>Calça Jeans - R$ 149,90</p>
          </div>
          <div className="produto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrA--0cF-LOPwhTL0ZC34do3mqc0iJAlVhdvqSC20vmigdirt-FZmVKlwOZNtMJ2_iB_s&usqp=CAU" alt="Calça Jeans" />
            <p>Calça Jeans - R$ 149,90</p>
          </div>
          <div className="produto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lwHZ9t36ca5irs0fIk48SaXehMhVRibh8xtzxUqpTaKATc8IBgmBQsENNN8wsIuWV1s&usqp=CAU" alt="Calça Jeans" />
            <p>Calça Jeans - R$ 149,90</p>
          </div>
          <div className="produto">
            <img src="https://img.ltwebstatic.com/images3_spmp/2023/07/18/1689680890dac346e5ba597b433fc822d8162b58d6_thumbnail_720x.jpg" alt="Calça Jeans" />
            <p>Calça Jeans - R$ 149,90</p>
          </div>
          <div className="produto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lwHZ9t36ca5irs0fIk48SaXehMhVRibh8xtzxUqpTaKATc8IBgmBQsENNN8wsIuWV1s&usqp=CAU" alt="Calça Jeans" />
            <p>Calça Jeans - R$ 149,90</p>
          </div>
          <div className="produto">
            <img src="https://img.ltwebstatic.com/images3_spmp/2023/07/18/1689680890dac346e5ba597b433fc822d8162b58d6_thumbnail_720x.jpg" alt="Calça Jeans" />
            <p>Calça Jeans - R$ 149,90</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 OharaModas. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
