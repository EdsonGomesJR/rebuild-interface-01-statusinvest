
export function Footer() {
  // 
  // 
  return (
    <div className="w-full flex items-center justify-center  text-white bg-gradient-to-t from-[#00598a] to-[#04ab94]" >
      <div className="max-w-[1110px] w-full flex justify-center flex-col items-center">
      <div>Social icons</div>
      <div>divider</div>
      <div>
        <p className="text-center">Todas as informações apresentadas tem caráter informativo e são provenientes de fontes públicas como <strong className="font-black">B3</strong>, <strong className="font-black">CVM</strong>, <strong className="font-black">TESOURO NACIONAL</strong>, etc. e de dados calculados a partir das informações coletadas. O StatusInvest não tem o objetivo de fazer sugestão de compra ou venda de ativos, sendo assim, não se responsabiliza pelas decisões e caminhos tomados a partir da análise das informações aqui apresentadas.</p>
      </div>
      <div className="grid grid-cols-2 divide-x w-1/2 mt-4">
        <div className="flex uppercase  justify-center ">
          <div className="flex flex-col">
          <strong className="mb-2">ASSINATURAS</strong>
          <span>PLANO <strong>BULL</strong></span>
          <span>módulo <strong>forecast</strong></span>
          </div>
        </div>
        <div className="flex  justify-center">
          <div className="flex flex-col">
          <strong className="uppercase mb-2">statusinvest</strong>
          <span>Política de Privacidade</span>
          <span>Termos de Uso</span>
          <span>Fale Conosco bugicon</span>
          </div>
        </div>

      </div>
      <div className="flex flex-col items-center mt-4">
        <span>Copyright © 2023 StatusInvest. Todos os direitos reservados</span>
        <span>Copyright © 2023 FactSet</span>
      </div>
      </div>
    </div>
  )
}
