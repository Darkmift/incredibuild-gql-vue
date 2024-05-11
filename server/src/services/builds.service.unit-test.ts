import { IBuild } from '@/types/build';
import BuildsService from './builds.service';

describe('BuildsService', () => {
  let service: BuildsService;
  let pageResult: IBuild[];
  beforeAll(() => {
    service = new BuildsService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // get page
  it('should get paginated builds', async () => {
    const limit = 10;
    pageResult = await service.getPaginatedBuilds(0, limit);
    expect(pageResult).toBeDefined();
    expect(pageResult.length).toBe(limit);
  });

  // get by id
  it('should get a build by id', async () => {
    const buildId = pageResult[0].buildId;
    const build = await service.getBuildById(buildId);
    expect(build).toBeDefined();
    expect(build?.buildId).toBe(buildId);
  });
});
