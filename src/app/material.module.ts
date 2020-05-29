import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatIcon } from '@angular/material/icon';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule],
  exports: [MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule],
})
export class MaterialModule {}
