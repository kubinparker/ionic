import { IonButton, IonButtons, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonLabel, IonRow, IonThumbnail, IonToolbar } from "@ionic/react";
import { personCircle, search, cloudDownloadOutline, desktopOutline, phonePortraitOutline } from 'ionicons/icons';
import '../pages/css/common.css';
import { isMobile } from 'react-device-detect';


const HeaderContainer: React.FC<{ isPreview?: boolean }> = (props) => {
    let preview = (<>
        <IonInput placeholder="Search" />
        <IonButton><IonIcon slot="icon-only" icon={search} /></IonButton>
    </>);

    if (props.isPreview) {
        preview = (<>
            <IonButton class="preview-btn">
                プレビュー
            </IonButton>
            <IonButton class="preview-btn">
                <IonIcon slot="start" icon={cloudDownloadOutline} />
                <IonLabel>保存</IonLabel>
            </IonButton>
        </>);
    }

    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start" class="logo">
                    <IonThumbnail >
                        <IonImg src="/assets/icon/jpage_icon.png" alt='' />
                    </IonThumbnail>
                </IonButtons>
                {props.isPreview && !isMobile ? (
                    <IonGrid>
                        <IonRow class="ion-justify-content-center">
                            <IonButtons collapse>
                                <IonButton mode="ios">
                                    <IonIcon slot="icon-only" icon={desktopOutline}></IonIcon>
                                </IonButton>
                                <IonButton>
                                    <IonIcon slot="icon-only" icon={phonePortraitOutline}></IonIcon>
                                </IonButton>
                            </IonButtons>
                        </IonRow>
                    </IonGrid>
                ) : null}
                <IonButtons slot="end">
                    {preview}
                    <IonButton>
                        <IonIcon slot="icon-only" icon={personCircle} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader >
    );

};

export default HeaderContainer;