
import KoalaWelcomeEmail from '@/emails';
import { render } from '@react-email/components';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
    // rate limit

    

    const { email, userFirstname } = await request.json();
    
    const { data, error } = await resend.emails.send({
        from: 'Acme <noreply@doner-robot.nl>',
        to: [email],
        subject: 'Hello world',
        html: render(KoalaWelcomeEmail ({ userFirstname }))
    })

    if (error) {
        return Response.json(error);
    }

    return Response.json({ message: "EMail sent" })
}