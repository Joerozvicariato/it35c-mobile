import { IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonContent }from'@ionic/react';

const Page1: React.FC =()=>{
  return(
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Page 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonButton expand="full">This is Page 1</IonButton>
        </IonContent>
    </IonPage>
  );
};
export default Page1;