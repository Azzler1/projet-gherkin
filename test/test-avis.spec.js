// TEST NUMERO 8 DE NOTRE PDF GHERKIN (voir pdf)
// test la feature AVIS / REVIEW
import { test, expect } from '@playwright/test';

test('Vérifier l\'affichage des avis clients pour un produit', async ({ page }) => {
    // Étape 1 : Aller à la page du produit
    await page.goto('https://www.amazon.fr/Simplissime-light-livre-cuisine-facile/dp/2011356423');

    // Étape 2 : Cliquer sur le lien de la section "Avis clients"
    await page.click('#acrCustomerReviewLink');

    // Étape 3 : Vérifier que les avis clients sont affichés
    const reviewsSection = await page.isVisible('#customerReviews');
    expect(reviewsSection).toBeTruthy();
});

