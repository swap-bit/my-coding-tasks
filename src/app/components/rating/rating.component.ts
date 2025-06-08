import { Component, signal } from '@angular/core';
import { PrimeNgModule } from '../../common/module/prime-module';


@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [
    PrimeNgModule
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {

  readonly MAX_RATING_COUNT = 5;
  currentRating = signal(0);
  progressPercentage = signal(0)
  ratingArr = Array.from({ length: this.MAX_RATING_COUNT}, (_, i) => i + 1)

  selectedRating(rating: number): void {
    console.log(rating);
    this.currentRating.set(rating);
    this.updateProgressPercentage();
  }

  updateProgressPercentage(): void {
    const ratingCount = this.currentRating();
    this.progressPercentage.set(ratingCount * 20);
  }
}
