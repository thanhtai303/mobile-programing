using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using APIsLibrary.Models;

namespace APIsLibrary.Controllers
{
    public class BOOKsController : ApiController
    {
        private LibraryManagementEntities db = new LibraryManagementEntities();

        // GET: api/BOOKs
        public IQueryable<BOOK> GetBOOKS()
        {
            return db.BOOKS;
        }

        // GET: api/BOOKs/5
        [ResponseType(typeof(BOOK))]
        public async Task<IHttpActionResult> GetBOOK(int id)
        {
            BOOK bOOK = await db.BOOKS.FindAsync(id);
            if (bOOK == null)
            {
                return NotFound();
            }

            return Ok(bOOK);
        }

        // PUT: api/BOOKs/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutBOOK(int id, BOOK bOOK)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bOOK.bookid)
            {
                return BadRequest();
            }

            db.Entry(bOOK).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BOOKExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/BOOKs
        [ResponseType(typeof(BOOK))]
        public async Task<IHttpActionResult> PostBOOK(BOOK bOOK)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BOOKS.Add(bOOK);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BOOKExists(bOOK.bookid))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = bOOK.bookid }, bOOK);
        }

        // DELETE: api/BOOKs/5
        [ResponseType(typeof(BOOK))]
        public async Task<IHttpActionResult> DeleteBOOK(int id)
        {
            BOOK bOOK = await db.BOOKS.FindAsync(id);
            if (bOOK == null)
            {
                return NotFound();
            }

            db.BOOKS.Remove(bOOK);
            await db.SaveChangesAsync();

            return Ok(bOOK);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BOOKExists(int id)
        {
            return db.BOOKS.Count(e => e.bookid == id) > 0;
        }
    }
}