import CardRazasPerros from "components/CardRazasPerros";
import borderCollie from 'media/border-collie.jpeg'
import pastorAleman from 'media/pastor-aleman2.jpg'
import goldenRetriver from 'media/golden-retreiver.jpg'
import CavalierKing from 'media/Cavalier-king.jpg'
import bulldog from 'media/bulldog.jpg'



function Index(){
    return (
    <div>
        <main>
            <section>
                <h1 className="Section1Title">Razas de perros</h1>
                <ul className="breedCardContainer">
                    <CardRazasPerros nombreRaza='Border Colllie' imagen={borderCollie} megusta='15422' comentario='50' linkstopage='BorderCollieInfoPage' />
                    <CardRazasPerros nombreRaza='Pastor Aleman' imagen={pastorAleman} megusta='5051' comentario='15' linkstopage='Pastoraleman'/>
                    <CardRazasPerros nombreRaza='Golden Retriver' imagen={goldenRetriver} megusta='8432' comentario='35' linkstopage='Goldenretriver'/>
                    <CardRazasPerros nombreRaza='Cavalier King' imagen={CavalierKing} megusta='20543' comentario='65' linkstopage='Cavalierking'/>
                    <CardRazasPerros nombreRaza='Bulldog' imagen={bulldog} megusta='7503' comentario='38' linkstopage='Bulldogs'/>
                </ul>
            </section>
        </main>
    </div>
    )
}
export default Index;