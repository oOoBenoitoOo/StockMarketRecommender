import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from './../../../environments/environment';
import { FakeSevice } from './http.service.mock';




describe('HttpService', () => {
  let httpMock: HttpTestingController;
  let service: FakeSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FakeSevice]
    });
    service = TestBed.inject(FakeSevice);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a get request', () => {
    service.getAll().subscribe();
    const req = httpMock.expectOne(`${environment.base}`);
    expect(req.request.method).toBe('GET');
  });

  it('should send a delete request', () => {
    service.delete(1).subscribe();
    const req = httpMock.expectOne(`${environment.base}/1`);
    expect(req.request.method).toBe('DELETE');
  });

  it('should send a post request', () => {
    service.post({}).subscribe();
    const req = httpMock.expectOne(`${environment.base}`);
    expect(req.request.method).toBe('POST');
  });

  it('should send a put request', () => {
    service.put(1, {}).subscribe();
    const req = httpMock.expectOne(`${environment.base}/1`);
    expect(req.request.method).toBe('PUT');
  });

});
