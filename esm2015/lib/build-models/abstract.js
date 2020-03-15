export class GrAbstract {
    constructor(options) {
        this.validators = options ? options.validators : [];
        this.asyncValidators = options ? options.asyncValidators : [];
        this.disabled = options ? options.disabler : null;
        this.valueOverride = options ? options.valueOverrider : null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nci1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9idWlsZC1tb2RlbHMvYWJzdHJhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JBLE1BQU0sT0FBZ0IsVUFBVTtJQU05QixZQUFtQixPQUFnQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWJzdHJhY3RDb250cm9sT3B0aW9ucywgQXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCB0eXBlIEZvcm1WYWxpZGF0b3JzID0gVmFsaWRhdG9yRm4gfCBWYWxpZGF0b3JGbltdIHwgQWJzdHJhY3RDb250cm9sT3B0aW9ucyB8IG51bGw7XG5leHBvcnQgdHlwZSBBc3luY0Zvcm1WYWxpZGF0b3JzID0gQXN5bmNWYWxpZGF0b3JGbiB8IEFzeW5jVmFsaWRhdG9yRm5bXSB8IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybURpc2FibGVPcHRpb25zIHtcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgb25seVNlbGY/OiBib29sZWFuO1xuICBlbWl0RXZlbnQ/OiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgRm9ybURpc2FibGUgPSBib29sZWFuIHwgRm9ybURpc2FibGVPcHRpb25zO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsdWVPdmVycmlkZSB7XG4gIHZhbHVlOiBhbnk7XG4gIG9wdGlvbnM/OiB7XG4gICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbjtcbiAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbnMge1xuICB2YWxpZGF0b3JzPzogRm9ybVZhbGlkYXRvcnM7XG4gIGFzeW5jVmFsaWRhdG9ycz86IEFzeW5jRm9ybVZhbGlkYXRvcnM7XG4gIGRpc2FibGVyPzogT2JzZXJ2YWJsZTxGb3JtRGlzYWJsZT47XG4gIHZhbHVlT3ZlcnJpZGVyPzogT2JzZXJ2YWJsZTxWYWx1ZU92ZXJyaWRlPjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyQWJzdHJhY3Qge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdmFsaWRhdG9yczogRm9ybVZhbGlkYXRvcnM7XG4gIHByb3RlY3RlZCByZWFkb25seSBhc3luY1ZhbGlkYXRvcnM6IEFzeW5jRm9ybVZhbGlkYXRvcnM7XG4gIHByb3RlY3RlZCByZWFkb25seSBkaXNhYmxlZDogT2JzZXJ2YWJsZTxGb3JtRGlzYWJsZT47XG4gIHByb3RlY3RlZCByZWFkb25seSB2YWx1ZU92ZXJyaWRlOiBPYnNlcnZhYmxlPFZhbHVlT3ZlcnJpZGU+O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgdGhpcy52YWxpZGF0b3JzID0gb3B0aW9ucyA/IG9wdGlvbnMudmFsaWRhdG9ycyA6IFtdO1xuICAgIHRoaXMuYXN5bmNWYWxpZGF0b3JzID0gb3B0aW9ucyA/IG9wdGlvbnMuYXN5bmNWYWxpZGF0b3JzIDogW107XG4gICAgdGhpcy5kaXNhYmxlZCA9IG9wdGlvbnMgPyBvcHRpb25zLmRpc2FibGVyIDogbnVsbDtcbiAgICB0aGlzLnZhbHVlT3ZlcnJpZGUgPSBvcHRpb25zID8gb3B0aW9ucy52YWx1ZU92ZXJyaWRlciA6IG51bGw7XG4gIH1cbn1cbiJdfQ==