import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import  Menu from '../components/Menu';
import  Footer from '../components/Footer';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Menu menu="Groupe" isActive={true} />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Tab2;
