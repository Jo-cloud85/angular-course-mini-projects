import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../receipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  	recipes: Recipe[]; // declaring variable recipes to be an array of Recipe object

	constructor(private recipeService: RecipeService,
				private router: Router,
				private route: ActivatedRoute) {}

	ngOnInit() {
		// Getting a copy of recipes
		this.recipes = this.recipeService.getRecipes();
	}

	onNewRecipe() {
		this.router.navigate(['new'], { relativeTo: this.route })
	}
}
