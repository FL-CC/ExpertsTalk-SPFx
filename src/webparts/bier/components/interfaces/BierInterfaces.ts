// SharePoint ListItem Struktur (ContentType)
export interface IBierListItem {
  Title: string;
  Price: number;
  Percent: number;
}

// Bier.jsx - Komponente
// Definition der Props
export interface IBierProps {
  description: string;
  limit: number;
}
// Definition des States
export interface IBierState {
  count: number;
  limit: number;
  bierData: IBierSorte[];
}

// Definition eines Biersorten "Objekts"
export interface IBierSorte {
  title: string;
  price: number;
  percent: number;
}

// BierStatus.tsx - Komponente
// Definition der Props
export interface IBierStatusProps {
  count: number;
  limit: number;
}

// FabricBierTable.tsx -  Komponente
// Definition der Props
export interface IFabricBierTableProps {
  items: IBierSorte[];
}
