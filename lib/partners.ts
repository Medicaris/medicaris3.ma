/**
 * Fabricants partenaires, communiques par le client le 11/09/2026.
 *
 * ATTENTION avant mise en production :
 *  - verifier marque par marque que Medicaris est autorisee a citer le nom ;
 *  - obtenir l'accord ecrit d'utilisation des logos avant d'en afficher un ;
 *  - confirmer l'exclusivite la ou elle est revendiquee.
 * Tant que ces trois points ne sont pas traites, on n'affiche que les noms.
 */
export interface Partner {
  name: string
  /** Precision affichee sous le nom. Laisser vide plutot que de supposer. */
  noteFr?: string
  noteEn?: string
}

export const PARTNERS: readonly Partner[] = [
  { name: 'Pioon', noteFr: 'Plateformes laser', noteEn: 'Laser platforms' },
  { name: 'Curaway', noteFr: 'Générateurs de radiofréquence', noteEn: 'Radiofrequency generators' },
  { name: 'BlueRay Med' },
  { name: 'Oberon' },
  { name: 'Shenda', noteFr: 'Groupe Lepu Medical', noteEn: 'Lepu Medical group' },
  { name: 'Wego Medical' },
  { name: 'MT Medical' },
  { name: 'Gigaamed' },
]
