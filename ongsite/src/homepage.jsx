import React, { useState } from 'react';
import headerImage from './headerImage.png';
import crianca1Image from './crianca1.jpg';
import ong1 from './ong1.jpg';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import crianca2 from './crianca2.png'
import ondafinal from './ondafinal.png'


function Header() {
    return (
        <header style={{ background: 'white', padding: '37px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ fontFamily: 'arial', fontWeight: 'bold', fontSize: '22px', lineHeight: '30px' }}>  {/*cabeçalho*/}
                <span style={{ marginRight: '20px' }}>PROPOSITO</span>
                <span style={{ marginRight: '20px' }}>NOSSAS ATIVIDADES</span>
                <span style={{ marginRight: '20px' }}>CONTATO</span>
                <span>DOE AGORA</span>
            </div>
        </header>
    );
}

function DiveCentral() {
    const [dives, setDives] = useState([]);
    const [newDive, setNewDive] = useState('');

    const handleInputChange = (event) => {
        setNewDive(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <div>
            <Header />
            <img src={headerImage} alt="Header" style={{ width: '333px', height: '333px', top: '-110px', right: '550px', gap: '0px', opacity: '0px', marginBottom: '20px', position: 'relative' }} /> {/* div da logomarca*/}
            <div style={{ width: '100%', maxWidth: '1920px', height: '485px', top: '-355px', gap: '0px', opacity: '0px', backgroundImage: `url(${crianca1Image})`, backgroundSize: 'cover', position: 'relative', marginBottom: '20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}></div>  {/* div da foto da menina*/}
            <div style={{ width: '310px', height: '120px', top: '-400px', left: '211px', gap: '0px', opacity: '0px', position: 'relative', padding: '20px' }}>  {/* Div do primeiro titulo 'Sorriso de Criança'*/}
                <h2 style={{ fontFamily: 'Arial', fontSize: '60px', fontWeight: 'bold', lineHeight: '58.59px', textAlign: 'justify', color: '#427FBC' }}>SORRISO DE CRIANÇA</h2>
                <div style={{
                    width: '676px',
                    height: '411px',
                    top: '10px',
                    left: '10px',
                    gap: '0px',
                    opacity: '0px',
                    fontFamily: 'Mukta',
                    fontSize: '25px',
                    fontWeight: 300,
                    lineHeight: '29.3px',
                    textAlign: 'left',
                    position: 'relative'
                }}>
                    <p>Zélia e Carmerival são um casal que há 50 anos se dedicam à criação de crianças e ao trabalho social. Eles começaram com um terreno custeado por seus próprios recursos em um dos novos bairros de Feira de Santana na década de 70. O casal acolheu as crianças que lhes chegavam e lhes proporcionou o acesso a moradia, educação intelectual, moral e espiritual, esportes, atividades recreativas, estudo de línguas estrangeiras e ainda meditação e yoga.</p>
                </div>
            </div>
            <div style={{
                width: '530px',
                height: '703px',
                top: '639px',
                left: '1000px',
                gap: '0px',
                borderRadius: '50px 50px 50px 50px',
                opacity: '0px',
                overflow: 'hidden',
                position: 'absolute'
            }}>
                <img src={ong1} alt="Imagem da ONG" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
                width: '663px',
                height: '89px',
                top: '60px',
                left: '211px',
                padding: '10px 10px 12px 10px',
                gap: '10px',
                borderRadius: '100px 100px 100px 100px',
                opacity: '0px',
                background: '#427FBC',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Arial', fontSize: '40px', fontWeight: 'bold', lineHeight: '35px', textAlign: 'left', color: '#FFFFFF'

            }}> FAÇA SUA DOAÇÃO
            </div>
            <div style={{
                background: '#CBCBCB',
                width: '1864px',
                height: '1px',
                top: '300px',
                left: '0px',
                gap: '0px',
                opacity: '150px',
                position: 'relative'
            }}></div>
            <div style={{
                width: '656px',
                height: '59px',
                top: '350px',
                left: '642px',
                gap: '0px',
                opacity: '0px',
                fontFamily: 'Arial',
                fontSize: '40px',
                fontWeight: 'bold',
                color: '#427FBC',
                marginTop: '20px',
                position: 'relative'
            }}>
                CULTURA ORGANIZACIONAL
            </div>
            <div style={{
                background: '#427FBC',
                width: '1864px',
                height: '1061px',
                top: '400px',
                left: '0px',
                gap: '0px',
                opacity: '150px',
                position: 'relative',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
            }}></div>
            <div style={{
                background: '#FFFFFF',
                width: '1323px',
                height: '211px',
                top: '-500px',
                left: '276px',
                gap: '0px',
                opacity: '150px',
                position: 'relative',
                borderRadius: '20px 20px 20px 20px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
            }}> </div>
            <div style={{
                background: '#FFFFFF',
                marginTop: '40px',
                width: '1323px',
                height: '211px',
                top: '-500px',
                left: '276px',
                gap: '0px',
                opacity: '150px',
                position: 'relative',
                borderRadius: '20px 20px 20px 20px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
            }}> </div>
            <div style={{
                background: '#FFFFFF',
                marginTop: '40px',
                width: '1323px',
                height: '211px',
                top: '-500px',
                left: '276px',
                gap: '0px',
                opacity: '150px',
                position: 'relative',
                borderRadius: '20px 20px 20px 20px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
            }}>  </div>
            <img src={img1} alt="img1" style={{ width: '170px', height: '170px', top: '-1200px', right: '350px', gap: '0px', opacity: '0px', marginBottom: '20px', position: 'relative' }} />
            <img src={img2} alt="img2" style={{ width: '170px', height: '170px', top: '-940px', right: '520px', gap: '0px', opacity: '0px', marginBottom: '20px', position: 'relative' }} />
            <img src={img3} alt="img3" style={{ width: '170px', height: '170px', top: '-700px', right: '685px', gap: '0px', opacity: '0px', marginBottom: '20px', position: 'relative' }} />
            <div style={{ width: '310px', height: '120px', top: '-450px', left: '211px', gap: '0px', opacity: '0px', position: 'relative', padding: '20px' }}>  {/* Div do primeiro titulo 'Sorriso de Criança'*/}
                <h2 style={{ fontFamily: 'Arial', fontSize: '60px', fontWeight: 'bold', lineHeight: '58.59px', textAlign: 'justify', color: '#427FBC' }}>SEJA UM VOLUNTÁRIO!</h2>
                <div style={{
                    width: '676px',
                    height: '411px',
                    top: '-20px',
                    left: '10px',
                    gap: '0px',
                    opacity: '0px',
                    fontFamily: 'Arial',
                    fontSize: '25px',
                    fontWeight: 300,
                    lineHeight: '29.3px',
                    textAlign: 'justify',
                    position: 'relative'
                }}>
                    <p style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>Você já pensou em fazer a diferença na vida de outras pessoas?</p>
                    <p>Queremos convidá-lo a se tornar parte de uma jornada inspiradora e gratificante como voluntário em nossa ONG. Acreditamos que cada pequena ação pode gerar um impacto positivo duradouro. Seja você um estudante, um profissional, um aposentado ou alguém que simplesmente deseja contribuir para um mundo melhor, há um lugar para você em nossa equipe de voluntários.</p>
                </div>
                <img src={crianca2} alt="Ajude as crianças" style={{ width: '782px', height: '518px', top: '-600px', right: '-800px', gap: '0px', opacity: '0px', marginBottom: '20px', position: 'relative' }} />
                <div style={{
                    width: '663px',
                    height: '89px',
                    top: '-500px',
                    left: '0px',
                    padding: '10px 10px 12px 10px',
                    gap: '10px',
                    borderRadius: '100px 100px 100px 100px',
                    opacity: '0px',
                    background: '#427FBC',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Arial', fontSize: '40px', fontWeight: 'bold', lineHeight: '35px', textAlign: 'left', color: '#FFFFFF'

                }}> SEJA UM VOLUNTARIO
                </div>
            </div>
            <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor:'#FFFFFF',  lineHeight: '28.59px',                    
                    width: '463px',
                    height: '300px',
                    top: '850px',
                    left: '1000px',
                    padding: '10px 10px 12px 10px',
                    gap: '10px',
                    borderRadius: '30px 30px 30px 30px',
                    opacity: '0px',
                    position: 'relative',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
      <h2 style={{ color:'#427FBC'}}>FALE CONOSCO!</h2>
      <p>
        E-mail: contato@ifsorrisodecrianca.com.br<br />
        Tel.: +55 (75) 3221 5021<br />
        Cel.: +55 (75) 99299-9231
      </p>
      <p>
        Rua Júpiter, nº 450 – Bairro Jardim Acácia<br />
        Feira de Santana – BA, Brasil<br />
        CEP 44004-336
      </p>
    </div>
            <img src={ondafinal} alt="final" style={{ width: '1864px', height: '1116px', top: '400px', right: '0px', gap: '0px', opacity: '0px', marginBottom: '20px', position: 'static' }} />
        </div>

    );
}

export default DiveCentral;

