import React, { useState, useRef } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonItem, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { closeOutline, logOutOutline, chatbubblesOutline, peopleOutline, newspaperOutline } from 'ionicons/icons';
import './Menu.css';

interface MenuProps {
    menu: string;
    isActive: boolean;
}
const Menu: React.FC<MenuProps> = ({ menu, isActive = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const menuRef = useRef<HTMLIonMenuElement | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // if (menuRef.current) {
        //     menuRef.current.open();
        // }
    };
    
    // const closeMenu = () => {
    //     // setIsMenuOpen(true);
    //     if (menuRef.current) {
    //         menuRef.current.close();
    //     }
      
    // };

  return (
    <>
        <IonMenu type="overlay" >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                    <IonButtons slot="end">
                        <IonMenuButton onClick={toggleMenu}/>
                        {/* <IonButton onClick={closeMenu}>
                            <IonIcon icon={closeOutline} /> 
                        </IonButton> */}
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {/* <h2>Menu</h2> */}
                <IonItem href="/tab1">
                    <IonIcon icon={chatbubblesOutline}  className="custom-icon"/>
                    <code>Discussion</code>
                </IonItem>
                <IonItem href="/tab2">
                    <IonIcon icon={peopleOutline}  className="custom-icon"/>
                    <code>Groupe</code>
                </IonItem>
                <IonItem href="/tab3">
                    <IonIcon icon={newspaperOutline}  className="custom-icon" />
                    <code>Stories</code>
                </IonItem>
            </IonContent>
            <IonButton expand="full" color="danger" href="/login">
                <IonIcon icon={logOutOutline} />
                <IonTitle>Déconnexion</IonTitle>
            </IonButton>
        </IonMenu>
        <IonHeader id="main-content">
            <IonToolbar>
            {isActive ? (
                <IonButtons slot="start">
                    <IonMenuButton onClick={toggleMenu}/>
                </IonButtons>
            ) : null}
                <IonTitle>{ menu }</IonTitle>
            </IonToolbar>
        </IonHeader>
    </>
  );
};

export default Menu;
