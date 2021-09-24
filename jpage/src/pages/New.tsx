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
    IonReorderGroup,
    IonApp,
    IonMenu,
    IonList,
    IonListHeader,
    IonIcon,
    IonBadge,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonFab,
    IonMenuToggle,
    IonFabButton
} from '@ionic/react';
import React from 'react';
import { add, personCircle, search, ellipsisHorizontalOutline, documentOutline, starOutline, chevronForwardOutline, chevronBackOutline } from 'ionicons/icons';
import HeaderContainer from '../components/HeaderContainer';

const New: React.FC = (props) => {
    return (
        <IonApp>
            <IonPage id="main-content">
                <HeaderContainer isPreview={true} />

                <IonContent fullscreen class="demo-content">
                    <IonGrid class="split-pane-main">
                        <IonRow class="demo-header">

                        </IonRow>
                        <IonRow class="demo-content">

                        </IonRow>
                        <IonRow class="demo-footer">

                        </IonRow>
                    </IonGrid>
                </IonContent>

            </IonPage >
        </IonApp>
    );
};
export default New;