import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';    

const commonModule = [
    ButtonModule,
    CardModule,
    ProgressBarModule,
    DividerModule
]

@NgModule({
    imports: [
        ...commonModule
    ],
    exports: [
        ...commonModule
    ]
})

export class PrimeNgModule {}