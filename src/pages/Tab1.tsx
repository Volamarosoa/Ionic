import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonNavLink, IonButton } from '@ionic/react';
import Tab2 from './Tab2';
import './Tab1.css';
import  Menu from '../components/Menu';
import  Footer from '../components/Footer';

const Tab1: React.FC = () => {
  return (
    <IonPage className="page">
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <Menu menu="Discussion" isActive={true} />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonNavLink routerDirection="forward" component={() => <Tab2 />}>
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>
        <IonItem>
            <code>Ravaka❤️</code>
        </IonItem>
        <IonItem >
            <code>Malalako🥰</code>
        </IonItem>
        <IonItem>
            <code>Ravady😍</code>
        </IonItem>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Tab1;
