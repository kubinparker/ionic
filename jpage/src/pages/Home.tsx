import { IonContent, IonFooter, IonHeader, IonPage, IonButtons, IonToolbar, IonIcon, IonButton, IonImg, IonThumbnail, IonInput, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonMenu, IonTitle, IonList, IonItem, IonRouterOutlet, IonMenuToggle, IonApp, IonListHeader, IonLabel, IonFab, IonFabButton, IonBadge } from '@ionic/react';
import './Home.css';
import { add, personCircle, search, ellipsisHorizontalOutline, documentOutline, starOutline, chevronForwardOutline, chevronBackOutline } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { useState } from 'react';
import HeaderContainer from '../components/HeaderContainer';

const Home: React.FC<RouteComponentProps> = (props) => {
	return (
		<IonApp>
			<IonMenu content-id="main-content">
				<IonContent>
					<IonList>
						<IonListHeader>New!</IonListHeader>
						<IonItem button>
							<IonIcon slot="start" icon={starOutline} />
							<IonLabel> 人気テンプレート </IonLabel>
						</IonItem>
						<IonItem button onClick={() => props.history.push('/new')}>
							<IonIcon slot="start" icon={documentOutline}></IonIcon>
							<IonLabel> 白紙テンプレート </IonLabel>
						</IonItem>
						<IonItem></IonItem>

						<IonListHeader>カテゴリー!</IonListHeader>
						<IonItem button>
							<IonIcon slot="start" />
							<IonLabel> ビジネス </IonLabel>
							<IonBadge slot="end">0</IonBadge>
						</IonItem>
						<IonItem button>
							<IonIcon slot="start"></IonIcon>
							<IonLabel> プログ </IonLabel>
							<IonBadge slot="end">0</IonBadge>
						</IonItem>
						<IonItem button>
							<IonIcon slot="start"></IonIcon>
							<IonLabel> デザイン </IonLabel>
							<IonBadge slot="end">0</IonBadge>
						</IonItem>
						<IonItem></IonItem>
					</IonList>
				</IonContent>
			</IonMenu>

			<IonPage id="main-content">
				<HeaderContainer />

				<IonContent fullscreen className="ion-padding">
					<IonGrid>
						<IonRow>
							<IonCol sizeXl="3" sizeLg="3" sizeMd="4" sizeSm="6" sizeXs="12">
								<IonCard>
									<IonCardHeader>
										<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
										<IonCardTitle>Card Title</IonCardTitle>
									</IonCardHeader>

									<IonCardContent>
										Keep close to Nature's heart... and break clear away, once in awhile,
										and climb a mountain or spend a week in the woods. Wash your spirit clean.
									</IonCardContent>
								</IonCard>
							</IonCol>
							<IonCol sizeXl="3" sizeLg="3" sizeMd="4" sizeSm="6" sizeXs="12">
								<IonCard>
									<IonCardHeader>
										<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
										<IonCardTitle>Card Title</IonCardTitle>
									</IonCardHeader>

									<IonCardContent>
										Keep close to Nature's heart... and break clear away, once in awhile,
										and climb a mountain or spend a week in the woods. Wash your spirit clean.
									</IonCardContent>
								</IonCard>
							</IonCol>
							<IonCol sizeXl="3" sizeLg="3" sizeMd="4" sizeSm="6" sizeXs="12" >
								<IonCard>
									<IonCardHeader>
										<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
										<IonCardTitle>Card Title</IonCardTitle>
									</IonCardHeader>

									<IonCardContent>
										Keep close to Nature's heart... and break clear away, once in awhile,
										and climb a mountain or spend a week in the woods. Wash your spirit clean.
									</IonCardContent>
								</IonCard>
							</IonCol>
							<IonCol sizeXl="3" sizeLg="3" sizeMd="4" sizeSm="6" sizeXs="12" >
								<IonCard>
									<IonCardHeader>
										<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
										<IonCardTitle>Card Title</IonCardTitle>
									</IonCardHeader>

									<IonCardContent>
										Keep close to Nature's heart... and break clear away, once in awhile,
										and climb a mountain or spend a week in the woods. Wash your spirit clean.
									</IonCardContent>
								</IonCard>
							</IonCol>
							<IonCol sizeXl="3" sizeLg="3" sizeMd="4" sizeSm="6" sizeXs="12" >
								<IonCard>
									<IonCardHeader>
										<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
										<IonCardTitle>Card Title</IonCardTitle>
									</IonCardHeader>

									<IonCardContent>
										Keep close to Nature's heart... and break clear away, once in awhile,
										and climb a mountain or spend a week in the woods. Wash your spirit clean.
									</IonCardContent>
								</IonCard>
							</IonCol>
						</IonRow>

					</IonGrid>

				</IonContent>
				<IonFooter translucent>
					<IonGrid>
						<IonRow class="ion-justify-content-center">
							<IonButtons class="pagination" >
								<IonButton >
									<IonIcon slot="icon-only" icon={chevronBackOutline} />
								</IonButton>
								<IonButton>
									<IonIcon slot="icon-only" icon={chevronForwardOutline} />
								</IonButton>
								<IonLabel slot="end">1/10</IonLabel>
							</IonButtons>
						</IonRow>
					</IonGrid>
				</IonFooter>

				<IonFab vertical="bottom" horizontal="start" slot="fixed" class="menu-bottom">
					<IonToolbar>
						<IonMenuToggle>
							<IonFabButton>
								<IonIcon icon={ellipsisHorizontalOutline} />
							</IonFabButton>
						</IonMenuToggle>
					</IonToolbar>
				</IonFab>

			</IonPage >
			{/* <IonFab vertical="bottom" horizontal="end" slot="fixed">
				<IonFabButton onClick={() => props.history.push('/new')}>
					<IonIcon icon={add} />
				</IonFabButton>
			</IonFab> 
			<div class="site-cover" style="height: 783px;">
				<div class="gridLines">
					<svg class="gridLines">
						<line x1="275" y1="0" x2="275" y2="100%" class="backLine"></line>
						<line x1="1255" y1="0" x2="1255" y2="100%" class="backLine"></line>
						<line x1="0" y1="111" x2="100%" y2="111" class="backLine"></line>
						<line x1="0" y1="611" x2="100%" y2="611" class="backLine"></line>
						<line x1="275" y1="0" x2="275" y2="100%" class="frontLine"></line>
						<line x1="1255" y1="0" x2="1255" y2="100%" class="frontLine"></line>
						<line x1="0" y1="111" x2="100%" y2="111" class="frontLine"></line>
						<line x1="0" y1="611" x2="100%" y2="611" class="frontLine"></line>
					</svg>
				</div>
			</div>
			*/}
		</IonApp>
	);
};

export default Home;
