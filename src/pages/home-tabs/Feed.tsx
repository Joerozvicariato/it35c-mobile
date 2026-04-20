import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonList, IonItem, IonLabel } from "@ionic/react";


const Favorite: React.FC = () => {

  const games = [
    {name: 'Pokemon Yellow'},
    {name: 'Mega man X '},
    {name: 'The legend of zelda'},
    {name: 'Pacman  '},
    {name: 'Super Mario World  '},
    {name: 'Bomberman'},
  ]

    return (
    <IonPage>
        <IonHeader>
            <IonButtons>
                <IonMenuButton></IonMenuButton>
                <IonTitle>Favorite</IonTitle>
            </IonButtons>
        </IonHeader>
        <IonContent className="ion-padding">
            <h1>Favorite</h1>


            <IonList>
                {games.map((game, index) => (
                    <IonItem key={index}>
                        <IonLabel>{game.name}</IonLabel>
                    </IonItem>
                ))}
            </IonList>
        </IonContent>
    </IonPage>
  )
};


export default Favorite;