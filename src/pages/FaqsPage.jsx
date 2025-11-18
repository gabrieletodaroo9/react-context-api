import BannerUcl from "../components/BannerUCL";
import BlackFridayBanner from "../components/BlackFridayBanner";

export default function FaqsPage() {
    return (
        <>
            <main className="bg-second text-first">
                <div className="container-fluid container-md py-5">
                    <h1 className="text-center mb-5 fw-bold RobotoCondensed">Domande Frequenti (FAQ)</h1>
                    <section className="mb-5">
                        <h2 className="border-bottom pb-2 mb-4 fs-1">🛒 Ordini e Account</h2>
                        <div className="mb-4">
                            <h3 className="fs-5 fw-bold fs-2"> Come posso tracciare il mio ordine?</h3>
                            <p className="ms-2 text-secondary fs-5">
                                Riceverai un'e-mail di conferma spedizione che include un <strong className="text-dark">Numero di Tracking</strong> e un link diretto al sito del corriere. Puoi anche monitorare lo stato del tuo ordine in tempo reale accedendo alla sezione <strong className="text-dark">"I miei ordini"</strong> nel tuo account Amazonado.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="fs-5 fw-bold fs-2"> Posso modificare o annullare un ordine dopo averlo effettuato?</h3>
                            <p className="ms-2 text-secondary fs-5">
                                Se l'ordine non è ancora entrato in fase di preparazione (di solito entro 30-60 minuti dall'acquisto), è possibile annullarlo o modificarlo contattando immediatamente il nostro <strong className="text-dark">Servizio clienti</strong>. Una volta che lo stato è <strong className="text-dark">"In preparazione"</strong> o <strong className="text-dark">"Spedito"</strong>, non è più possibile modificarlo.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="fs-5 fw-bold fs-2"> Cosa devo fare se il mio account è bloccato o ho dimenticato la password?</h3>
                            <p className="ms-2 text-secondary fs-5">
                                Nella pagina di login, clicca su <strong className="text-dark">"Password dimenticata"</strong> e segui le istruzioni per reimpostarla tramite l'e-mail registrata. Se il tuo account risulta bloccato per motivi di sicurezza, contatta il nostro supporto per l'assistenza.
                            </p>
                        </div>
                    </section>
                    <hr />
                    <section className="my-5">
                        <h2 className="border-bottom pb-2 mb-4 fs-1">🚚 Spedizione e Consegna</h2>
                        <div className="mb-4">
                            <h3 className="fs-5 fw-bold fs-2"> Quali sono i tempi e i costi di spedizione?</h3>
                            <p className="ms-2 text-secondary fs-5">
                                Offriamo diverse opzioni di spedizione. La <strong className="text-dark">spedizione Standard</strong> (3-5 giorni lavorativi) è gratuita per ordini superiori a €49. La <strong className="text-dark">spedizione Express</strong> (1-2 giorni lavorativi) ha un costo fisso che viene calcolato al checkout. I tempi di consegna specifici sono sempre indicati al momento dell'acquisto.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="fs-5 fw-bold fs-2"> Il mio pacco risulta consegnato ma non l'ho ricevuto. Cosa devo fare?</h3>
                            <p className="ms-2 text-secondary fs-5">
                                Controlla prima con i vicini o eventuali custodi. Se ancora non trovi il pacco, contatta il nostro Servizio Clienti fornendo il numero d'ordine. Avvieremo subito un'indagine con il corriere per localizzare o sostituire l'articolo smarrito.
                            </p>
                        </div>
                    </section>
                    <hr />
                    <section className="my-5">
                        <h2 className="border-bottom pb-2 mb-4 fs-1">💳 Pagamenti</h2>
                        <div className="mb-4">
                            <h3 className="fs-5 fw-bold fs-2"> Quali metodi di pagamento accettate?</h3>
                            <p className="ms-2 text-secondary fs-5">
                                Accettiamo tutte le principali carte di credito e debito (Visa, MasterCard, American Express), PayPal, e, in alcuni casi, il pagamento alla consegna (Contrassegno) con una piccola commissione aggiuntiva. Non accettiamo bonifici bancari diretti per gli ordini online.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="fs-5 fw-bold fs-2">I miei dati di pagamento sono al sicuro?</h3>
                            <p className="ms-2 text-secondary fs-5">
                                Assolutamente sì. Utilizziamo sistemi di crittografia avanzati e standard di sicurezza internazionali (come la tecnologia SSL e la conformità PCI DSS) per garantire che i tuoi dati sensibili siano protetti durante ogni transazione. Amazonado non memorizza i dettagli completi della tua carta di credito.
                            </p>
                        </div>
                    </section>
                    <hr />
                    <section className="mt-5 mb-3">
                        <h2 className="border-bottom pb-2 mb-4 fs-1">↩️ Resi e Rimborsi</h2>
                        <div className="mb-4">
                            <h3 className="fs-5 fw-bold fs-2"> Qual è la vostra politica di reso?</h3>
                            <p className="ms-2 text-secondary fs-5">
                                Hai <strong className="text-dark">30 giorni</strong> dalla data di ricezione per richiedere un reso per qualsiasi motivo. Il prodotto deve essere non usato, nella sua confezione originale e con tutte le etichette intatte. Per avviare la procedura, visita la sezione <strong className="text-dark">"Effettua il reso"</strong> nel tuo account.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="fs-5 fw-bold fs-2"> Quando e come riceverò il rimborso?</h3>
                            <p className="ms-2 text-secondary fs-5">
                                Una volta che il tuo reso viene ricevuto e ispezionato (solitamente entro 5 giorni lavorativi), il rimborso viene emesso sul metodo di pagamento originale. I tempi di visualizzazione sul tuo conto possono variare da <strong className="text-dark">3 a 10 giorni lavorativi</strong>, a seconda della tua banca o dell'istituto di credito.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="fs-5 fw-bold fs-2"> Cosa succede se ricevo un articolo difettoso o danneggiato?</h3>
                            <p className="ms-2 text-secondary fs-5">
                                Ti preghiamo di contattarci entro 48 ore dalla consegna, allegando delle foto del danno o del difetto. Organizzeremo immediatamente un ritiro a nostre spese e ti invieremo un prodotto sostitutivo o emetteremo un rimborso completo.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <BlackFridayBanner />
            <BannerUcl />
        </>
    )
}