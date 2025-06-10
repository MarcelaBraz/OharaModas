import React from 'react';
import './Produtos.css'; // Estilos opcionais

function Produtos() {
  const produtos = [
    { id: 1, nome: 'Camiseta One Piece', preco: 'R$ 79,90', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyn4hbx5NZFaHIZuuH-_oPMzUL5TcGCRg4g&s' },
    { id: 2, nome: 'Jaqueta Zoro Style', preco: 'R$ 199,90', imagem: 'https://aiella.com.br/cdn/shop/files/S46edbb5b98ff4283a910eb46821368855.webp?v=1729881356' },
    { id: 3, nome: 'Calça Skinny Nami', preco: 'R$ 129,90', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxf-vGlKiYBkh2xVeYm_THW3XdOMxIjw4jhw&s' },
    { id: 4, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://cdn.sistemawbuy.com.br/arquivos/c72914aa6a5aa05ffe960ca65df63071/produtos/669e8a60870a5/whatsapp-image-2024-07-22-at-13-37-55-1-669e8c37b7ef5.jpeg' },
    { id: 5, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://lojaskalyfer.com.br/cdn/shop/files/955b5220f9560cdb4cc455f4c7a6a89d.jpg?v=1718507818' },
    { id: 6, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://www.calitta.com/24354-large_default/calca-feminina-vintage-jeans-com-abertura-no-joelho.jpg' },
    { id: 7, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://www.lojastyleme.com.br/cdn/shop/files/Vestido-Festa-Acinturado-Curto-Renda-Poa-Alcinha-Branco.webp?v=1700263818' },
    { id: 8, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lwHZ9t36ca5irs0fIk48SaXehMhVRibh8xtzxUqpTaKATc8IBgmBQsENNN8wsIuWV1s&usqp=CAU' },
    { id: 9, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://cdn.dooca.store/140425/posts/atacado-de-roupas-femininas-02.png?v=1713899371&webp=0' },
    { id: 10, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://cdn.sistemawbuy.com.br/arquivos/0724ad39afd4d09347ebd8b2d8949477/produtos/646b6f2678da0/bl3042-3-646b6f27da11c.jpg' },
    { id: 11, nome: 'Camiseta One Piece', preco: 'R$ 79,90', imagem: 'https://blog.tcheinverno.com.br/novo/wp-content/uploads/2024/03/look-de-frio-feminino-casual-elegante-sobreposicao-cores.jpg' },
    { id: 12, nome: 'Jaqueta Zoro Style', preco: 'R$ 199,90', imagem: 'https://www.lojastyleme.com.br/cdn/shop/products/vestido_flora_midi_romance_manga_curta_decotado_branco_azul.jpg?v=1681069211&width=1445' },
    { id: 13, nome: 'Calça Skinny Nami', preco: 'R$ 129,90', imagem: 'https://cdn.dooca.store/152488/products/19-42_450x600.jpg?v=1724353666&webp=0' },
    { id: 14, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://images.tcdn.com.br/img/img_prod/826022/calca_cargo_feminina_308180923144_36_42_4193_1_70d56294ede24c3b0ec7281b00b776cd.jpeg' },
    { id: 16, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://cdn.awsli.com.br/1000x1000/1538/1538522/produto/260340425/feb20812-2140-43ec-857e-9c97e1969a65-ivcpkt1pn2.jpg' },
    { id: 17, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://dzg5mdpaq0k37.cloudfront.net/Custom/Content/Products/51/12/5112_short-clochard-feminino-alfaiataria-afina-cintura-81270_m1_638537399051297917.webp' },
    { id: 18, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://divamoderna.com.br/cdn/shop/files/SHEIN_VCAY_Vestido_Estampado_com_Flores_Sem_Costas_para_Frias_e_Lazer__SHEIN_Brasil_main_5_1340x.jpg?v=1730232001' },
    { id: 19, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIe7If-mmXJ7JgUwQQPuByaiWjkIwfqCa9rLkGRUwErqTZavh8pSPot_NGrwzBJb0QhdM&usqp=CAU' },
    { id: 20, nome: 'Boné Luffy Gear 5', preco: 'R$ 59,90', imagem: 'https://photos.enjoei.com.br/vestido-longo-vinho-floral-95267120/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdXRzLzI4OTc1MTA1LzJlMWFjNTA2MDlhMzg1ZDY4MjA5OTc2ODkwMTM2Y2E3LmpwZw==' }
  ];

  return (
    <div className="produtos">
      <h2>Nossos Produtos</h2>
      <div className="lista-produtos">
        {produtos.map(produto => (
          <div key={produto.id} className="produto-card">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>{produto.preco}</p>
            <button>Comprar</button>
          </div>
        ))}
        <footer className="footer">
          <p>© 2025 OharaModas. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default Produtos;
