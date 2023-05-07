import './icones.css'

function Icones({ icone, descricao, link }){

  return(
    <div className='circulo'>
      <a href={link} rel='noreferrer' target='_blank'>
        <img src={icone} alt={descricao}/>     
      </a>
    </div>
  )
}
  
export default Icones;