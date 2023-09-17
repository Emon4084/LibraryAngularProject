import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { Category } from '../../models/category/category.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
//import { Action } from 'rxjs/internal/scheduler/Action';


@Component({
  selector: 'app-Category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  newCategory: Category = new Category(0,'','',false); // Initialize with default values
  editingCategory: Category | null = null;


  dataSource = new MatTableDataSource<Category>([]);
  displayedColumns: string[] = ['categoryId', 'categoryName', 'ddcCode', 'isActive','actions'];
  pageSize = 5;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
    filterValue: any;
   //filterValue: any;
  
  constructor(private categoryService: CategoryService,
    private dialogService: MatDialog
  ) { }

  ngOnInit() {
    this.loadCategories();
  //  this.updateDataSource();
  }


  ngAfterViewInit(): void {
    // Initialize the paginator and sort after the view is ready
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: response => {
        console.log(response);
        this.categories = response; // Assign the data to 'categories'

        this.updateDataSource();
        this.dataSource.paginator = this.paginator; //add paginator
        this.dataSource.sort = this.sort;           //add sort
      },
      error: error => {
        console.error('Error loading categories:', error);
      }

    });
  }

  updateDataSource(): void {
    const currentPage = this.paginator.pageIndex;
    const itemsPerPage = this.paginator.pageSize;
    const startIndex = currentPage * itemsPerPage;
    this.categories.slice(startIndex, startIndex + itemsPerPage).forEach((brand, index) => {
      const adjustedIndex = startIndex + index + 1;
      (brand as any)['/*categoryId*/'] = this.toRoman(adjustedIndex);       //update this line for Roman no show instanc fo Id no
    });
    this.dataSource.data = this.categories;
  }


  calculateRomanNumeral(index: number): string {
    const currentPage = this.paginator.pageIndex;
    const itemsPerPage = this.paginator.pageSize;
    const adjustedIndex = currentPage * itemsPerPage + index + 1;
    return this.toRoman(adjustedIndex);
  }

  toRoman(num: number): string {
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV'];
    return num >= 1 && num <= romanNumerals.length ? romanNumerals[num - 1] : '';
  }

  //applyFilter() {
  //  const filterValue = this.filterValue.trim().toLowerCase(); //add for searching 
  //  this.dataSource.filter = filterValue;
  //}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  
  deleteCategory(id: number) {
    const dialogRef = this.dialogService.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.categoryService.deleteCategory(id).subscribe({
          next: response => {
            console.log('Category deleted:', response);
            this.loadCategories();
          },
          error: error => {
            console.error('Error deleting Category:', error);
          },
        });
      }
    });
  }


  createCategory() {
    this.categoryService.postCategory(this.newCategory).subscribe({
      next: response => {
        console.log('Category created:', response);
        this.newCategory = new Category(0, '', '', false); // Reset the form
        this.loadCategories();
      },
      error: error => {
        console.error('Error creating Category:', error);
      }
    });
  }

  editCategory(Category: Category) {
    this.editingCategory = { ...Category }; // Create a copy of the Category object
  }

  cancelEdit() {
    this.editingCategory = null;
  }


  saveEdit() {
    if (this.editingCategory) {
      this.categoryService
        .putCategory(this.editingCategory.categoryId, this.editingCategory)
        .subscribe({
          next: response => {
            console.log('Category updated:', response);
            this.loadCategories();
            this.editingCategory = null;
          },
          error: error => {
            console.error('Error updating Category:', error);
          }
        });
    }
  }

}
