/**
 * PRÉVERSION (site3).
 *
 * Cette copie sert à faire arbitrer le client avant de toucher à medicaris.ma.
 * Tant que ce drapeau vaut true :
 *   - toutes les pages sortent en noindex, nofollow (cf. app/layout.tsx) ;
 *   - robots.txt interdit l'intégralité du site ;
 *   - un bandeau discret rappelle qu'il ne s'agit pas du site en ligne.
 *
 * Au moment de la bascule en production : passer à false, retirer le bloc
 * `robots` de la metadata dans app/layout.tsx, puis vérifier /robots.txt.
 */
export const IS_PREVIEW = true
