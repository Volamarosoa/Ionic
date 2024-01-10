import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import  Menu from '../components/Menu';
import  Footer from '../components/Footer';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <Menu menu="Stories" isActive={true} />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Tab3;
