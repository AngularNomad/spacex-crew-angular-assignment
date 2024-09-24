import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SpacexService } from './spacex.service';

describe('SpacexService', () => {
  let service: SpacexService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpacexService]
    });
    service = TestBed.inject(SpacexService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch crew data', () => {
    const dummyCrew = [
      { name: 'Robert Behnken', agency: 'NASA', wikipedia: 'https://en.wikipedia.org/wiki/Robert_L._Behnken', status: 'Active' }
    ];

    service.getCrewData().subscribe(crew => {
      expect(crew.length).toBe(1);
      expect(crew).toEqual(dummyCrew);
    });

    const req = httpMock.expectOne('https://api.spacexdata.com/v4/crew');
    expect(req.request.method).toBe('GET');
    req.flush(dummyCrew);
  });
});
