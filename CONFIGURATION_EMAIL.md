# Configuration du Formulaire de Contact

## Email de destination
**contact@elegance-technique.com** (hébergé chez LWS)

## Service utilisé
Le formulaire utilise **Formspree** - un service gratuit qui gère l'envoi d'emails depuis les formulaires web.

## Étapes de configuration (5 minutes)

### 1. Créer un compte Formspree
- Allez sur https://formspree.io
- Cliquez sur "Sign Up" (Inscription)
- Utilisez votre email: **contact@elegance-technique.com**
- Créez un mot de passe
- Confirmez votre compte via l'email de vérification

### 2. Créer un formulaire
- Une fois connecté, cliquez sur "+ New Form"
- Nom du formulaire: "Contact Elegance-Technique"
- Email de destination: **contact@elegance-technique.com**
- Cliquez sur "Create Form"

### 3. Obtenir l'ID du formulaire
- Formspree vous donnera un ID unique (exemple: `f/mbjklpqr`)
- Copiez cet ID (la partie après `/f/`)

### 4. Mettre à jour le code
- Ouvrez le fichier: `app/page.tsx`
- Cherchez la ligne ~157: `fetch('https://formspree.io/f/xpwwgbzo'`
- Remplacez `xpwwgbzo` par votre nouvel ID
- Exemple: `fetch('https://formspree.io/f/mbjklpqr'`

### 5. Tester le formulaire
- Sauvegardez le fichier
- Allez sur votre site
- Remplissez et envoyez le formulaire de contact
- Vérifiez votre boîte email **contact@elegance-technique.com**

## Avantages de Formspree
✅ Gratuit jusqu'à 50 soumissions/mois
✅ Protection anti-spam intégrée
✅ Pas besoin de serveur backend
✅ Notifications instantanées par email
✅ Archive de tous les messages dans le dashboard Formspree

## Support
Si vous avez des problèmes, contactez le support Formspree: https://help.formspree.io

## Alternative (si besoin)
Si vous préférez utiliser directement votre serveur email LWS, il faudrait créer une API backend avec Node.js et nodemailer. Formspree est la solution la plus simple et rapide.
