import { Injectable } from '@angular/core'; // Tells Angular that this is a service that can be used anywhere in the app.
import { HttpClient } from '@angular/common/http'; // Allows us to make HTTP requests (like calling APIs).
import { Observable, throwError } from 'rxjs';  // This helps us handle asynchronous data (like API responses).
import { catchError, retry } from 'rxjs/operators'; // We’ll use these to retry failed requests and handle errors.

@Injectable({
  providedIn: 'root'  // This means this service will be available throughout the whole app without needing to import it multiple times.
})
export class SpacexService {
  private apiUrl = 'https://api.spacexdata.com/v4/crew';  // This is the URL of the SpaceX API we'll use to get crew data.

  constructor(private http: HttpClient) {}
  // injecting HttpClient so we can use it to make HTTP requests.

  // Fetch SpaceX crew data with 2 retries on failure
  getCrewData(): Observable<any> {
    // We're making a GET request to the SpaceX API and returning the result.
    return this.http.get(this.apiUrl).pipe(
      retry(2),
      catchError(this.handleError) // If there’s an error, we’ll handle it in the handleError function.
    );
  }

  // This function will handle any errors that occur while trying to fetch the data.
  private handleError(error: any) {
    console.error('Error fetching SpaceX crew data:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
