// Événements de souris et de pointeur
// Assurez-vous que toutes les fonctionnalités exposées via un 

// événement de souris ou de pointeur sont également accessibles 

// avec le clavier seul. Ne dépendre que du pointeur peut aboutir 

// à de nombreuses situations où les utilisateurs de clavier ne pourront 

// pas utiliser votre application.

// Pour illustrer ça, examinons un exemple courant où l’accessibilité 

// est cassée par les événements de clics. Il s’agit du modèle de clic 

// extérieur dans lequel un utilisateur peut désactiver une liste 

// déroulante en cliquant à l’extérieur de l’élément.


// Un bouton ouvrant une liste déroulante implémenté par le modèle 

// du clic externe et déclenché par la souris montrant que l'action de 
// fermeture fonctionne.

// C’est généralement implémenté en écoutant l’événement click 

// de l’objet window pour fermer le menu déroulant :

class OuterClickExample extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { isOpen: false };
      this.toggleContainer = React.createRef();
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }
  
    componentDidMount() {
      window.addEventListener('click', this.onClickOutsideHandler);
    }
  
    componentWillUnmount() {
      window.removeEventListener('click', this.onClickOutsideHandler);
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen
      }));
    }
  
    onClickOutsideHandler(event) {
      if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }
  
    render() {
      return (
        <div ref={this.toggleContainer}>
          <button onClick={this.onClickHandler}>Choisissez une option</button>
          {this.state.isOpen && (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
      );
    }

    

//     Ça fonctionne peut-être pour les utilisateurs ayant des 

// dispositifs de pointage, tels qu’une souris, mais le fait de 

// n’utiliser que le clavier entraîne des dysfonctionnements lors de 

// la tabulation sur l’élément suivant, car l’objet window ne 

// reçoit jamais d’événement click. Ça peut finir par masquer des 

// fonctionnalités, ce qui empêche les utilisateurs d’utiliser votre 

// application.

// Un bouton ouvrant une liste déroulante implémenté par le modèle du 

// clic externe et déclenché par le clavier montrant que le menu 

// déroulant ne se ferme pas à la perte de focus et qu'il masque 

// d'autres éléments de l'écran.

// La même fonctionnalité peut être obtenue en utilisant les 

// gestionnaires d’événements appropriés, tels que onBlur et onFocus :



// class BlurExample extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { isOpen: false };
      this.timeOutId = null;
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onBlurHandler = this.onBlurHandler.bind(this);
      this.onFocusHandler = this.onFocusHandler.bind(this);
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen
      }));
    }
  
    // Nous fermons le menu déroulant au prochain tick en utilisant 
    // setTimeout.
    // C'est nécessaire car nous devons d'abord vérifier si un
    // autre enfant de l'élément a reçu le focus car l'événement
    // `blur` se déclenche avant le nouvel événement de focus.
    onBlurHandler() {
      this.timeOutId = setTimeout(() => {
        this.setState({
          isOpen: false
        });
      });
    }
  
    // Si un enfant reçoit le focus, alors on ne ferme pas 
    // le menu déroulant.
    onFocusHandler() {
      clearTimeout(this.timeOutId);
    }
  
    render() {
      // React nous aide en assurant la propagation des
      // événements `blur` et `focus` vers le parent.
      return (
        <div onBlur={this.onBlurHandler}
             onFocus={this.onFocusHandler}>
          <button onClick={this.onClickHandler}
                  aria-haspopup="true"
                  aria-expanded={this.state.isOpen}>
            Choisissez une option
          </button>
          {this.state.isOpen && (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
      );
    }
  }

//   Ce code expose la fonctionnalité aussi bien aux utilisateurs de dispositifs de pointage qu’aux utilisateurs de clavier. Remarquez également les propriétés aria-* ajoutées afin de prendre en charge les lecteurs d’écran. Par souci de simplicité, les événements clavier permettant l’interaction avec les options du menu déroulant via les touches de curseur n’ont pas été implémentés.

// Une liste déroulante se fermant correctement pour les utilisateurs de souris et de clavier.
// C’est un exemple des nombreux cas où le fait de ne dépendre que des événements de souris et de pointeur casse les fonctionnalités pour les utilisateurs de clavier. Toujours tester avec le clavier mettra immédiatement en évidence les problèmes qui peuvent ensuite être résolus à l’aide des gestionnaires d’événements clavier.

