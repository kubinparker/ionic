import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge, IonFab, IonFabButton, IonIcon } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
// import { attachProps } from '@ionic/react/dist/types/components/utils';

const Home: React.FC<RouteComponentProps> = (props) => {
	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank Browser</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>

				<IonList>
					<IonItem>
						<IonCheckbox slot="start" />
						<IonLabel>
							<h1>Create Idea</h1>
							<IonNote>Run Idea by Brandy</IonNote>
						</IonLabel>
						<IonBadge color="success" slot="end">
							5 Days
						</IonBadge>
					</IonItem>
					<IonItem>
						<IonCheckbox slot="start" />
						<IonLabel>
							<h1>Create Idea</h1>
							<IonNote>Run Idea by Brandy</IonNote>
						</IonLabel>
						<IonBadge color="success" slot="end">
							5 Days
						</IonBadge>
					</IonItem>
				</IonList>

				<IonFab vertical="bottom" horizontal="end" slot="fixed">
					<IonFabButton onClick={() => props.history.push('/new')}>
						<IonIcon icon={add} />
					</IonFabButton>
				</IonFab>

			</IonContent>

		</IonPage>
	);
};

export default Home;
