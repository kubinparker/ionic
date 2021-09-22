import { IonContent, IonHeader, IonPage, IonButtons, IonToolbar, IonFab, IonFabButton, IonIcon, IonButton, IonAvatar, IonImg, IonItem, IonThumbnail, IonSearchbar, IonInput } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { add, personCircle, search } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { useState } from 'react';
// import { attachProps } from '@ionic/react/dist/types/components/utils';

const Home: React.FC<RouteComponentProps> = (props) => {
	const [isSearchBarOpened, setIsSearchBarOpened] = useState<string>("ion-hide");
	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					{/* <IonItem class="logo" slot="start">
						<IonThumbnail >
							<IonImg src="/assets/icon/jpage_icon.png" alt='' />
						</IonThumbnail>
					</IonItem> */}
					<IonButtons slot="start" class="logo">
						<IonThumbnail >
							<IonImg src="/assets/icon/jpage_icon.png" alt='' />
						</IonThumbnail>
					</IonButtons>
					<IonSearchbar class={isSearchBarOpened}></IonSearchbar>
					<IonButtons slot="end">
						<IonInput></IonInput>
						<IonButton>

							<IonIcon slot="icon-only" icon={search} />
						</IonButton>
						<IonButton>
							<IonIcon slot="icon-only" icon={personCircle} />
						</IonButton>
					</IonButtons>
				</IonToolbar>

			</IonHeader >

			<IonContent fullscreen>
				{/* <IonFab vertical="bottom" horizontal="end" slot="fixed">
					<IonFabButton onClick={() => props.history.push('/new')}>
						<IonIcon icon={add} />
					</IonFabButton>
				</IonFab> */}
			</IonContent>

		</IonPage >
	);
};

export default Home;
