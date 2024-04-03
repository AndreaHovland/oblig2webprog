// Array for å lagre kjøpte billetter
let billetter = [];

// Funksjon for å kjøpe billetter
function kjop() {
    console.log("fungerer");
    // Hent verdier fra input-feltene
    let film = document.getElementById("filmer").value;
    let antallBilletter = document.getElementById("antallBiletter").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonNr = document.getElementById("telefonNr").value;
    let epost = document.getElementById("epost").value;

    // Regex validering på telefonnr (8 siffer)
    const telefonRegex = /^\d{8}$/;

    //Regex validering på epost
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validering av input-feltene
    if (film === "Velg film" || antallBilletter === "" || fornavn === "" || etternavn === "" || telefonNr === "" || epost === "") {
        alert("Vennligst fyll ut alle feltene.");
        return;
    }
    if (!telefonRegex.test(telefonNr)) {
        alert("Vennligst skriv inn et gyldig telefonnummer med 8 sifre.");
        return;
    }

    if (!epostRegex.test(epost)) {
        alert("Vennligst skriv inn en gyldig e-postadresse.");
        return;
    }

    // Legg til billetten i billetter-arrayet
    billetter.push({
        film: film,
        antallBilletter: antallBilletter,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonNr: telefonNr,
        epost: epost
    });

    // Oppdater visningen av billetter
    visKjopteBilletter();
}

//funksjon for å vise kjøpte billetter
function visKjopteBilletter() {
    let billettListe = document.getElementById("kjopteBiletter");
    billettListe.innerHTML = "";
    let htmlListe = "";
    for (let i = 0; i < billetter.length; i++) {
        let billett = billetter[i];
        htmlListe += `<li>Film: ${billett.film}, Antall: ${billett.antallBilletter}, Fornavn: ${billett.fornavn}, Etternavn:
            ${billett.etternavn}, TelefonNr: ${billett.telefonNr}, Epost: ${billett.epost}</li>`;
    }
    billettListe.innerHTML = htmlListe;
}

// funksjon for å skrive ut billetter
function skrivUt() {
    let ut = "";
    for (let i = 0; i < billetter.length; i++) {
        ut += billetter[i].film + "<br>" + billetter[i].antallBilletter + "<br>" + billetter[i].fornavn + " " + billetter[i].etternavn + "<br>" + billetter[i].telefonNr + "<br>" + billetter[i].epost + "<br>";
    }
    document.getElementById("utskrift").innerHTML = ut;
}

// funksjon for å slette alle billetter
function slettAlleBilletter() {
    billetter = [];
    visKjopteBilletter();
}

// Tøm inputfeltene
document.getElementById('filmer').value = "";
document.getElementById('antallBiletter').value = "";
document.getElementById('fornavn').value = "";
document.getElementById('etternavn').value = "";
document.getElementById('telefonNr').value = "";
document.getElementById('epost').value = "";
