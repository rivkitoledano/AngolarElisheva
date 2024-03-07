import { Routes } from '@angular/router';
import { IdentificationModule } from './identification/identification.module';
export const routes: Routes = [
    { path: '', redirectTo: 'identification', pathMatch: 'full' },
    { path: 'identification', loadChildren: () => import('./identification/identification.module').then(c => c.IdentificationModule) },
    { path: 'recipe', loadChildren: () => import('./recipe/recipe.module').then(r => r.RecipeModule) },
];
