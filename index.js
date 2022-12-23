window.addEventListener("DOMContentLoaded", (e) => {

    /*cette classe permet d'instancier des objets qui sont les descriptifs*/
    /*dropdown des produits de la boutiques*/
    /*La structure produite est en commentaire dans le html*/
    /*Les objets crées par la méthode createDrop sont dans : <div class="drop_down_container">objet</div>*/
    class Element {
        constructor(urlPicture, Title, desCription) {
            /*urlPicture : chemin de l'icone du déclencheur de la dropdown box*/
            /*Title : intitulé de ce même déclencheur*/
            /*desCription : contenu de la box*/
            this.urlPicture = urlPicture;
            this.Title = Title;
            this.desCription = desCription;
            this.bouton = document.createElement('h3'); //déclencheur
            this.item = document.createElement('article'); //contenu
        }

        createDrop() {
            const ddcont = document.createElement('div');
            ddcont.setAttribute('class', 'drop_down_container');

            this.bouton.setAttribute('class', 'button');
    
            this.item.setAttribute('class', 'items');

            ddcont.appendChild(this.bouton);
            ddcont.appendChild(this.item);

            const icon = document.createElement('img');
            icon.setAttribute('src', this.urlPicture);
            this.bouton.appendChild(icon); 

            const title = document.createElement('span');
            title.innerHTML = this.Title;
            this.bouton.appendChild(title)

            this.item.innerHTML = this.desCription;

            /*Ecouteur des dropdown boxes*/
            this.bouton.addEventListener('click', ()=> {
                this.item.classList.toggle('active');
                this.bouton.classList.toggle('active');
            });
            return ddcont;
        }
    }


    var xsbutton = document.querySelectorAll('.siz1');
    var sbutton = document.querySelectorAll('.siz2');
    var mbutton = document.querySelectorAll('.siz3');
    var lbutton = document.querySelectorAll('.siz4');
    var xlbutton = document.querySelectorAll('.siz5');
    var xxlbutton = document.querySelectorAll('.siz6');
    var xxxlbutton = document.querySelectorAll('.siz7');
    
    /*--------------------Section 1----------------------------------------------------*/
    const section1 = document.querySelectorAll(".section1 .main_drop_down_container");
    const texte1 = "<br>100% coton biologique - 170g<br><br> \
                    Ce tee-shirt est certifié Oeko-Tex Standard 100, Fairwear, GOTS, PETA Approved vegan<br><br> \
                    Nous sommes convaincus, comme vous, qu'il est important d'avoir de la transparence et une traçabilité sur les produits que nous achetons. Merci d'avoir cliqué pour en savoir plus.<br><br> \
                    Les t-shirts sont fabriqués en coton bio et ont reçu le label GOTS. Ils ont été montés dans les usines labellisées FairWear au Bengladesh puis imprimés dans un atelier GOTS à Bidart en France.<br><br> \
                    Si vous voulez en savoir plus sur notre partenaire Stanley Stella qui produit nos tee-shirts noirs, vous pouvez aller sur ce site <a class='linktex'  href='https://www.stanleystella.com/fr-be/public-home' target='_blank'>stanleystalla.com</a> ou télécharger leur <a class='linktex'  >Social Report 2021</a><br><br> \
                    Pour en savoir plus sur le label GOTS : <a class='linktex' href='https://www.labelinfo.be/fr' target='_blank'>labelinfo.be</a><br><br>";
    const dd1 = new Element('./pictures/leaf.svg', '&nbsp;Composition et fabrication', texte1).createDrop();

    const texte2 = "<br>Les t-shirt seront expédiés à partir du 3 Octobre.<br><br> \
                    Le planning de production des produits de la boutique ZEvent est consultable \<<a class=linktex>ici</a>\><br><br>";
    const dd2 = new Element('./pictures/delivery.svg', '&nbspDélais de livraison', texte2).createDrop();

    const texte3 = "<br>Ce t-shirt est unisexe !<br><br> \
                   Pour les hommes : prenez votre taille habituelle<br><br> \
                   Pour les femmes : prenez une taille en dessous<br><br>";
    const dd3 = new Element('./pictures/size.svg', '&nbspTaille', texte3).createDrop();
    
    const texte4 = "<br>Laver à 30°C retourné. Ne pas mettre au sèche-linge. Repasser à l'envers.<br><br>";
    const dd4 = new Element('./pictures/wash.svg', '&nbspLavage', texte4).createDrop();

    /*Les 4 boxes des T-Shirt*/
    section1[0].appendChild(dd1);
    section1[0].appendChild(dd2);
    section1[0].appendChild(dd3);
    section1[0].appendChild(dd4);
    
    /*--------------------Section 2----------------------------------------------------*/
    const section2 = document.querySelectorAll(".section2 .main_drop_down_container");
    //alert(section1[0].innerHTML);

    const texte21 = "<br>Taille 50 x 50 cm<br><br>";
    const dd21 = new Element('./pictures/size.svg', '&nbsp;Dimension', texte21).createDrop();

    const texte22 = "<br>Imprimé en France&nbsp;<span style='font-size: 10px'>FR</span><br><br>";
    const dd22 = new Element('./pictures/location.svg', '&nbspFabrication', texte22).createDrop();

    const texte23 = "<br>Impression à plat directement Dibond (fines plaques d'aluminium) avec des encres 100% écologiques et en haute définition. Cette oeuvre est fabriquée avec 2 accroches aux dos pour pouvoir l'exposer directement sur son mur.<br><br>";
    const dd23 = new Element('./pictures/print.svg', '&nbspImpression', texte23).createDrop();
    
    const texte24 = "<br>Nous attendons la fin du ZEVENT PLACE pour réaliser l'impression de cette oeuvre disponible uniquement sur la boutique ZEvent.<br><br>";
    const dd24 = new Element('./pictures/padlock.svg', '&nbspDesign exclusif', texte24).createDrop();

    /*Les 4 boxes des Zplaces*/
    section2[0].appendChild(dd21);
    section2[0].appendChild(dd22);
    section2[0].appendChild(dd23);
    section2[0].appendChild(dd24);
    
    /*--------------------Section 3----------------------------------------------------*/
    const section3 = document.querySelectorAll(".section3 .main_drop_down_container");
    //alert(section1[0].innerHTML);

    const texte31 = "<br>Début des expéditions prévu à partir du 28 Septembre.<br><br>";
    const dd31 = new Element('./pictures/delivery.svg', '&nbsp;Délais de livraison', texte31).createDrop();

    const texte32 = "<br>La plaque mesure 18 x 13 cm<br><br>";
    const dd32 = new Element('./pictures/size.svg', '&nbspDimensions', texte32).createDrop();

    const texte33 = "<br>Tirage numéroté et limité à 3.000 exemplaires (limité à 1 exemplaire par commande).<br><br>";
    const dd33 = new Element('./pictures/label.svg', '&nbspMise en panier', texte33).createDrop();
    
    const texte34 = "<br>Ce produit est fabriqué sur-mesure en Italie.<br><br>";
    const dd34 = new Element('./pictures/location.svg', '&nbspFabrication', texte34).createDrop();

    /*Les 4 boxes des Trophées*/
    section3[0].appendChild(dd31);
    section3[0].appendChild(dd32);
    section3[0].appendChild(dd33);
    section3[0].appendChild(dd34);

    /*----------------Gestion des boutons de tailles---------------------------*/
    function whitebutton() {
        xsbutton[0].style.backgroundColor = "white";
        sbutton[0].style.backgroundColor = "white";
        mbutton[0].style.backgroundColor = "white";
        lbutton[0].style.backgroundColor = "white"; 
        xlbutton[0].style.backgroundColor = "white"; 
        xxlbutton[0].style.backgroundColor = "white"; 
        xxxlbutton[0].style.backgroundColor = "white"; 
    }
    
    xsbutton[0].addEventListener('click', ()=> { 
        whitebutton();  
        xsbutton[0].style.backgroundColor = 'rgba(112,208,56,1)';
        xsbutton[0].style.border = 'solid 2px white';
    });
    sbutton[0].addEventListener('click', ()=> { 
        whitebutton();  
        sbutton[0].style.backgroundColor = 'rgba(112,208,56,1)';
        sbutton[0].style.border = 'solid 2px white';
    });
    mbutton[0].addEventListener('click', ()=> {
        whitebutton();  
        mbutton[0].style.backgroundColor = 'rgba(112,208,56,1)';
        mbutton[0].style.border = 'solid 2px white';
    });
    lbutton[0].addEventListener('click', ()=> { 
        whitebutton();  
        lbutton[0].style.backgroundColor = 'rgba(112,208,56,1)';
        lbutton[0].style.border = 'solid 2px white';
    });
    xlbutton[0].addEventListener('click', ()=> { 
        whitebutton();  
        xlbutton[0].style.backgroundColor = 'rgba(112,208,56,1)';
        xlbutton[0].style.border = 'solid 2px white';
    });
    xxlbutton[0].addEventListener('click', ()=> {
        whitebutton();   
        xxlbutton[0].style.backgroundColor = 'rgba(112,208,56,1)';
        xxlbutton[0].style.border = 'solid 2px white';
    });
    xxxlbutton[0].addEventListener('click', ()=> { 
        whitebutton();  
        xxxlbutton[0].style.backgroundColor = 'rgba(112,208,56,1)';
        xxxlbutton[0].style.border = 'solid 2px white';
    });


    /*------------------Gestion du bouton Acheter maintenant----------------*/
    const salesbutton = document.querySelectorAll('.describe_container button');
    for(let i = 0; i < 3; i++) {
        salesbutton[i].addEventListener('mouseleave', ()=> {
            salesbutton[i].style.backgroundColor = 'black';
        });
    
        salesbutton[i].addEventListener('click', ()=> {
            salesbutton[i].style.backgroundColor = 'rgba(112,208,56,1)';
        });
    }


    /*------------------Gestion du menu burger-----------------------------*/
    const banner = document.querySelectorAll('.banner');
    const menuburgoff = document.querySelectorAll('.burger_close');
    const menuburger = document.querySelectorAll('.navburger'); 
    const menuburgon = document.querySelectorAll('.burger_on'); 
    
    menuburgon[0].addEventListener('click', ()=> {
        banner[0].style.display = 'none';
        menuburgoff[0].style.display = 'block';
        menuburger[0].style.display = 'flex';
    });

    menuburgoff[0].addEventListener('click', ()=> {
        menuburgoff[0].style.display = 'none';
        menuburger[0].style.display = 'none';
        banner[0].style.display = 'flex';    
    });

    

    

    


    

    

    
    
    
    




    
}); //DOM prêt