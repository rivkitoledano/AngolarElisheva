import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { recipeRoutingModule } from './recipe-routing.module';
import { SmallRecipeComponent } from './components/small-recipe/small-recipe.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { DifficultyLevelPipe } from "../difficulty-level.pipe";
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [AllRecipesComponent, SmallRecipeComponent, EditRecipeComponent, AddRecipeComponent, RecipeDetailsComponent],
    imports: [
        CommonModule, MatButtonModule, MatCardModule, recipeRoutingModule, NavBarComponent,NgbPaginationModule, NgbAlertModule,
        DifficultyLevelPipe, NgbCarouselModule
    ]
})
export class RecipeModule { }
