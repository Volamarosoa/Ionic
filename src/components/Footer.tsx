import React from 'react';
import { IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import { chatbubblesOutline, peopleOutline, newspaperOutline } from 'ionicons/icons';
// import './Footer.css';

const Footer: React.FC = () => (
    <>
    <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
        <IonIcon aria-hidden="true" icon={chatbubblesOutline} />
        <IonLabel>Discussions</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
        <IonIcon aria-hidden="true" icon={peopleOutline} />
        <IonLabel>Groupe</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
        <IonIcon aria-hidden="true" icon={newspaperOutline} />
        <IonLabel>Stories</IonLabel>
        </IonTabButton>
    </IonTabBar>
    </>
);
export default Footer;