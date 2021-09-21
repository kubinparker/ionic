import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonButton,
    IonLabel,
    IonItem,
    IonToolbar,
    IonReorder,
    IonGrid,
    IonCol,
    IonReorderGroup
} from '@ionic/react';
import React from 'react';

const NewItem: React.FC = () => {

    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonButton color="primary" slot="end">Primary</IonButton>
                    <IonButton color="secondary" slot="end">secondary</IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent>

                <IonReorderGroup disabled={false}>
                    <IonItem>
                        <IonLabel>Item 1</IonLabel>
                        <IonReorder slot="end" />
                    </IonItem>
                </IonReorderGroup>
                <IonReorderGroup disabled={false}>
                    <IonItem>
                        <IonLabel>Item 2</IonLabel>
                        <IonReorder slot="end" />
                    </IonItem>
                </IonReorderGroup>
                <IonGrid>
                    <IonCol size="12" size-lg>
                        ion-col size="12" size-sm
                    </IonCol>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default NewItem;