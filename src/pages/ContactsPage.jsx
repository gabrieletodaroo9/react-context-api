import Jumbotron from "../components/Jumbotron";
import BlackFridayBanner from "../components/BlackFridayBanner"

export default function ContactsPage() {


    return (
        <>
            <main className="bg-second text-first">

                <div className="container-fluid container-md my-5">
                    <div className="row g-5 fs-4 align-item-start">
                        <div className="col-12 col-lg-6 d-flex flex-column align-items-center p-3">
                            <img src="https://www.barchemagazine.com/wp-content/uploads/2018/06/Team-For-Design.jpg" alt="" className="img-contacts rounded-5 img-fluid pb-2" />
                            <cite className="text-center pt-3 fw-bold edu-tas-beginner">'In Amazonado non vendiamo solo prodotti: ti offriamo la liberta' di scegliere la tua strada.'</cite>
                        </div>
                        <div className="col-12 col-lg-6 d-flex flex-column align-items-center p-3">
                            <img src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzaWduJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" alt="" className="img-contacts rounded-5 img-fluid pb-2" />
                            <cite className="text-center pt-3 fw-bold mb-4v edu-tas-beginner">'Il nostro vero prodotto e' la fiducia. Dalla selezione all'acquisto, fino alla consegna alla tua porta.'</cite>
                        </div>
                    </div>
                </div>
                <BlackFridayBanner />
                <div className="container py-5">
                    <div className="row g-3 pt-5">
                        <div className="col-12 d-flex flex-column align-items-center justify-content-center text-center">
                            <h2 className="RobotoCondensed mb-4">Chi Siamo: La Nostra Missione in Amazonado</h2>
                            <p className="fs-5">Benvenuti in Amazonado, la vostra destinazione unica per l'acquisto di tutto ciò che desiderate! Siamo nati dalla semplice idea che trovare prodotti di qualità, dal più essenziale al più sorprendente, non dovrebbe richiedere di navigare in un labirinto di siti web. Che si tratti di un gadget hi-tech, un capo di abbigliamento, l'ultimo libro o un utensile per la casa, il nostro obiettivo è offrirvi una selezione vasta e curata, unita alla semplicità di un click. Amazonado non è solo un e-commerce: è il vostro marketplace personale, costruito sulla fiducia, sulla convenienza e sull'impegno costante di rendere il vostro shopping online un'esperienza semplice, veloce e appagante.</p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center text-center">
                            <h2 className="RobotoCondensed mb-4">Amazonado: Il Mondo dei Prodotti Ti Aspetta</h2>
                            <p className="fs-5">Cosa stai cercando oggi? In Amazonado, la risposta è probabilmente: "Lo abbiamo!". Siamo fieri di essere un negozio che non pone limiti alla tua curiosità e alle tue necessità. La nostra vetrina è un universo in continua espansione, dove migliaia di prodotti, accuratamente selezionati in ogni categoria merceologica, convivono per darti la libertà di scegliere sempre il meglio. Il team di Amazonado lavora instancabilmente per garantire che ogni transazione sia sicura, ogni consegna puntuale e che la tua soddisfazione sia sempre la nostra priorità assoluta. Entra nel mondo di Amazonado e scopri il piacere di avere tutto a portata di mano, con la qualità e l'affidabilità che meriti.</p>

                        </div>
                        <div className="col-12 col-lg-6 d-flex flex-column align-self-start align-items-center justify-content-center text-center">
                            <h2 className="RobotoCondensed mb-4">🤝 Focus sull'Esperienza e sulla Comunità </h2>
                            <p className="fs-5">Oltre alla pura varietà di prodotti, ciò che ci definisce in Amazonado è l'attenzione al viaggio del cliente. Dalla navigazione intuitiva sul nostro sito, pensata per farti trovare esattamente ciò che cerchi (o ispirarti a qualcosa di nuovo), al supporto clienti dedicato sempre pronto ad assisterti, ci impegniamo a costruire una relazione di fiducia. Consideriamo i nostri clienti come parte di una grande comunità. Per questo, la logistica efficiente, i resi facili e le recensioni trasparenti sono la base su cui Amazonado cresce giorno dopo giorno, rendendo il tuo shopping non solo comodo, ma anche affidabile e gratificante per te e tutta la tua famiglia.</p>

                        </div>
                        <div className="col-12 d-flex flex-column align-items-center justify-content-center text-center">
                            <h2 className="RobotoCondensed mb-4">📦 La Promessa di Consegna e Affidabilità</h2>
                            <p className="fs-5">La vastità dell'offerta in Amazonado è supportata da una solida promessa di affidabilità. Sappiamo che quando ordini qualcosa, lo vuoi subito e senza sorprese. Per questo motivo, investiamo continuamente nella nostra rete logistica, collaborando con i migliori partner di spedizione per garantire che ogni pacco - che contenga un piccolo accessorio o un elettrodomestico ingombrante - arrivi a casa tua nel minor tempo possibile e in perfette condizioni. La nostra piattaforma è costantemente aggiornata con i sistemi di pagamento più sicuri, offrendoti la serenità di sapere che in Amazonado, il tuo acquisto è sempre protetto dall'inizio alla fine.</p>

                        </div>
                    </div>
                </div>
            </main >

            <Jumbotron topShadow={true} />

        </>
    )
}