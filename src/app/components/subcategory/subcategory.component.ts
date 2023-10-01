import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category/category.model';
import { Subcategory } from 'src/app/models/subcategory/subcategory.model';
import { CategoryService } from 'src/app/services/category/category.service';
import { SubcategoryService } from 'src/app/services/subcategory/subcategory.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  @ViewChild('categoryInput') categoryInput: any;

  subCategoryForm: FormGroup; // Removed "?" to ensure proper initialization
  subcategories: Subcategory[] = [];
  subcategoryToDisplay?: Subcategory[];

  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private subCategoryService: SubcategoryService,
    private categoryService: CategoryService
  ) {
    this.subCategoryForm = this.fb.group({
      ddcCode: [''],
      name: [''],
      isActive: false,
      categoryId: ['']
    });

    this.subcategoryToDisplay = this.subcategories;
  }

  ngOnInit(): void {
    this.getSubcategories();
    this.getCategories();
  }

  getSubcategories(): void {
    this.subCategoryService.getSubcategories().subscribe((res) => {
      this.subcategories = res;
      this.subcategoryToDisplay = this.subcategories;
    });
  }
  editSubcategory(subcategory: Subcategory) {
    // Populate the form with the data of the selected subcategory
    this.subCategoryForm.patchValue({
      ddcCode: subcategory.ddcCode,
      name: subcategory.name,
      isActive: subcategory.isActive,
      categoryId: subcategory.categoryId
    });
  }
  
  getCategoryName(categoryId: number): string {
    const category = this.categories.find(cat => cat.categoryId === categoryId);
    return category ? category.categoryName : '';
  }
  
  getCategories(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  submitForm() {
    const formData = this.subCategoryForm.value; // Get the form data
    // Send the form data to the server for subcategory creation
    this.subCategoryService.postSubcategory(formData).subscribe((createdSubcategory) => {
      // Optionally, you can handle success or display a success message
      console.log('Subcategory created:', createdSubcategory);
      // Reset the form after successful submission
      this.subCategoryForm.reset();
      // Refresh the subcategory list
      this.getSubcategories();
    });
  }
  
  updateSubcategory(subCategoryId: number) {
    const formData = this.subCategoryForm.value;
    console.log('Updating subcategory with data:', subCategoryId);
    this.subCategoryService.putSubcategory(subCategoryId, formData).subscribe(
      (updatedSubcategory) => {
        console.log('Subcategory updated:', updatedSubcategory);
        // Reset the form after successful update
        this.subCategoryForm.reset();
        // Refresh the subcategory list
        this.getSubcategories();
      },
      (error) => {
        console.error('Error updating subcategory:', error);
      }
    );
  }
  
  
  
  deleteSubcategory(subCategoryId: number | undefined) {
    if (subCategoryId === undefined) {
      // Handle the case where subCategoryId is undefined (e.g., show an error message)
      console.error('Invalid subCategoryId:', subCategoryId);
      return; // Exit the function to avoid further execution
    }
  
    // Display a confirmation dialog to confirm deletion
    const confirmDelete = confirm('Are you sure you want to delete this subcategory?');
    if (!confirmDelete) {
      return; // User canceled the deletion, exit the function
    }
  
    // Send a request to delete the subcategory by its subCategoryId
    this.subCategoryService.deleteSubcategory(subCategoryId).subscribe(
      () => {
        // Optionally, you can handle success or display a success message
        console.log('Subcategory deleted');
        // Refresh the subcategory list
        this.getSubcategories();
      },
      (error) => {
        // Handle errors here, such as displaying an error message
        console.error('Error deleting subcategory:', error);
      }
    );
  }
  
  
}
